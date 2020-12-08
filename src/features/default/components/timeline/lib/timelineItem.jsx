import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Card, Grid, CardMedia, CardContent, Box, Paper, makeStyles, Divider, Collapse, CardActions, IconButton } from '@material-ui/core'
import { directions } from './enums/enums'

export const useStyles = makeStyles(theme => {
	return {
		TimelineItem: {
			width: props => props.timelineItemWidth
				? props.timelineItemWidth : '50%',
			alignItems: 'center',
		},
		TimelineItemFull: {
			width: props => props.timelineItemWidth
				? props.timelineItemWidth : '100%',
			flexDirection: 'row',
			display: 'flex',
		},
		TimelineCard: {
			marginLeft: '-1em',
			'&:hover': {
				backgroundColor: 'yellow'
			}
		},
		TimelineCardContent: {
			paddingTop: props => props.padTop ? '8px' : null
		},
		ArrowLeft: {
			display: 'flex',
			flexDirection: 'row',
			marginTop: theme.spacing(2),
			direction: 'ltr',
			marginLeft: (props) => !props.isOneWay ? '6em' : '1em',
			'&::before': {
				content: '',
				width: 0,
				height: 0,
				borderTop: '0.5em solid white',
				borderBottom: '0.5em solid white',
				borderLeft: '0.5em solid white',
				borderRight: '0.5em solid white',
				boxShadow: '-1px 2px 1px -1px rgba(0,0,0,0.4)',
				transformOrigin: '0 0',
				transform: 'rotate(45deg)',
				marginLeft: '1em'
			}
		},
		ArrowRight: {
			display: 'flex',
			flexDirection: 'row-reverse',
			marginTop: theme.spacing(2),
			direction: 'ltr',
			marginRight: (props) => !props.isOneWay ? '6em' : '1em',
			'&::before': {
				content: '',
				width: 0,
				height: 0,
				borderTop: '0.5em solid white',
				borderBottom: '0.5em solid white',
				borderLeft: '0.5em solid white',
				borderRight: '0.5em solid white',
				boxShadow: '2px -1px 1px -1px rgba(0,0,0,0.4)',
				transformOrigin: '0 0',
				transform: 'rotate(45deg)',
			},

		},
		timelineYearWrapper: {
			content: '',
			background: (props) => props.customLine ? props.customLine :
				'linear-gradient(' + props.yearBackgroundColor + ',' + props.yearBackgroundColor + ' ) no-repeat center/4px 100%',
			height: '100%',
			display: 'block',
		},
		timelineYear: {
			alignSelf: 'flex-start',
			padding: 16,
			backgroundColor: props => props.yearBackgroundColor,
			color: props => props.yearColor,
			'&:hover': {
				color: 'yellow'
			}
		},
		timelineItemHeader: {
			padding: theme.spacing(1),
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center'
		},
		cardMedia: {
			height: props => props.cardMediaProps && props.cardMediaProps.height
				? props.cardMediaProps.height : '100px',
			objectFit: 'contain'
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		listDotLeft: {
			position: 'absolute',
			left: '50%',
			transform: 'translate(-50%, 0)',
			height: '100%',
			maxWidth: '11em'
		},
		listDotRight: {
			position: 'absolute',
			right: '50%',
			transform: 'translate(50%, 0)',
			height: '100%',
			maxWidth: '11em'
		}
	}
})

const TimelineItem = props => {

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = useCallback(() => {
		setExpanded(!expanded)
	}, [expanded])

	const classes = useStyles(props)

	const {
		htmlProps
	} = props

	const cardMedia = props.cardMediaProps ? (
		<CardMedia className={classes.cardMedia} component='img' src={props.cardMediaProps.imgUrl} />
	) : null

	const cardHeader = props.titleChildren ||
		props.cardHeaderChildren ? (
			<Grid container direction='column'>
				{props.titleChildren ? (
					<Grid item xs={12} md={12}>
						{props.titleChildren}
					</Grid>
				) : null}

				{props.cardHeaderChildren ? (
					<Grid item xs={12} md={12}>
						<Grid container direction='row'>
							{props.cardHeaderChildren}
						</Grid>
					</Grid>) : null}
			</Grid>
		) : null

	let cardContent = props.cardContentChildren ? (
		<CardContent>
			{props.cardContentChildren}
		</CardContent>
	) : null

	if (props.expandableCardContent && props.cardContentChildren) {
		cardContent = (
			<React.Fragment>
				<CardActions>
					<IconButton
						className={expanded ?
							[classes.expand, classes.expandOpen].join(' ') :
							[classes.expand].join(' ')}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout='auto'>
					{cardContent}
				</Collapse>
			</React.Fragment>
		)
	}

	const dividerGrid = props.hasDivider ? (
		<Grid item xs={12} md={12}>
			<br />
			<Divider />
		</Grid>
	) : null

	let listDotDirection
	if (!props.isOneWay) {
		listDotDirection = props.direction === directions.LEFT ?
			classes.listDotLeft : classes.listDotRight
	}

	let finalItem

	if (props.isStackedImage) {
		finalItem = (
			<div {...htmlProps} className={props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ')
				: [classes.TimelineItem, props.className].join(' ')}>
				<div className={listDotDirection}>
					<Paper className={classes.timelineYear}>
						{props.iconContent}
					</Paper>
					<div className={classes.timelineYearWrapper}>

					</div>
				</div>
				<Box className={props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight}>
					<Card component='div' className={classes.TimelineCard}>
						<Grid container justify='space-evenly'>
						{cardMedia ? (
							<Grid item xs={12} md={12}>
								{cardMedia}
							</Grid>
							) : null}
							<Grid className={classes.TimelineCardContent} item xs={12} md={12}>
								{cardHeader}
							</Grid>
							{dividerGrid}
							<Grid item xs={12} md={12}>
								{cardContent}
							</Grid>
						</Grid>
					</Card>
				</Box>
			</div>
		)
	}
	else {
		finalItem = (
			<div {...htmlProps} className={props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ')
				: [classes.TimelineItem, props.className].join(' ')}>
				<div className={listDotDirection}>
					<Paper className={classes.timelineYear}>
						{props.iconContent}
					</Paper>
					<div className={classes.timelineYearWrapper}>

					</div>
				</div>
				<Box className={props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight}>
					<Card component='div' className={classes.TimelineCard}>
						<Grid container justify='space-evenly'>
							{cardMedia ? (
							<Grid item xs={4} md={3}>
								{cardMedia}
							</Grid>
							) : null}
							<Grid className={classes.TimelineCardContent} item xs={7} md={8}>
								{cardHeader}
							</Grid>
							{dividerGrid}
							<Grid item xs={12} md={12}>
								{cardContent}
							</Grid>
						</Grid>
					</Card>
				</Box>
			</div>
		)
	}

	return finalItem
}

TimelineItem.propTypes = {
	yearBackgroundColor: PropTypes.string,
	yearColor: PropTypes.string,
	iconContent: PropTypes.element,
	cardHeaderChildren: PropTypes.node,
	cardContentChildren: PropTypes.node,
	cardMediaProps: PropTypes.shape(
		{
			imgUrl: PropTypes.string,
			height: PropTypes.string
		}
	),
	expandableCardContent: PropTypes.bool,
	titleChildren: PropTypes.node,
	padTop: PropTypes.bool,
	timelineItemWidth: PropTypes.string,
	hasDivider: PropTypes.bool,
	customLine: PropTypes.string
}

export default TimelineItem
