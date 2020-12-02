
import Utils from 'root/utils'
import {
  DEFAULT_ACTION,
} from '../actions/types'
import bannerImage from 'root/assert/images/mini-profile-bg-01.jpg'
import kolabsLogo from 'root/assert/images/kolabs-logo.jpg'
import titanLogo from 'root/assert/images/titan_techno.jpg'
import citynowLogo from 'root/assert/images/citynowLogo.jpg'
import gameLoftLogo from 'root/assert/images/gameloftLogo.png'
import fujinetLogo from 'root/assert/images/fujinetlogo.png'
import natureScienceLogo from 'root/assert/images/hcmusLogo.png'

const initalState = {
  bannerData: {
    title: 'Trần Thanh Tài',
    subTitle: 'ReactJS - Web developer',
    description:'Hello someone, so very happy to have you here to visit my site.',
    image: bannerImage,
  },
  experiences:
    [
      {
        key: 'titan-technology',
        date: '01/2019',
        description: 'Join in outsource project about audit in large team size, over 200 members',
        imgUrl: titanLogo,
        tags: [
          {
            key: 'react-js',
            name: 'React JS'
          },
          {
            key: 'redux',
            name: 'Redux tool kit'
          },
          {
            key: 'net-core',
            name: '.Net core'
          },
          {
            key: 'micro-service',
            name: 'Micro service'
          },
          {
            key: 'unit-test',
            name: 'Unit test by Moq'
          },
          {
            key: 'postgres',
            name: 'Postgres SQL'
          },
          {
            key: 'sqlServer',
            name: 'sqlServer'
          }
        ],
        title: 'Full Stack Web developer at Titan Technology'
      },
      {
        key: 'kolab-llc',
        date: '04/2017',
        description: 'Join in outsource project about events organization in small team size, about 20 members, and 2 product projects about betting online',
        imgUrl: kolabsLogo,
        tags: [
          {
            key: 'react-js',
            name: 'React JS'
          },
          {
            key: 'redux',
            name: 'Redux'
          },
          {
            key: 'unittest-mocha',
            name: 'Unit test by mocha'
          }
        ],
        title: 'Web Frontend Engineer at KoLabs LLC'
      },
      {
        key: 'citynow-company',
        date: '10/2016',
        description: 'Join in outsource project with japanese customer in small team size, about 10 members, and a product project about Jobseeker site',
        imgUrl: citynowLogo,
        tags: [
          {
            key: 'react-js',
            name: 'React JS'
          },
          {
            key: 'flux',
            name: 'Flux'
          },
          {
            key: 'scala',
            name: 'Scala'
          },
          {
            key: 'postgres',
            name: 'Postgres SQL'
          }
        ],
        title: 'Full stack Engineer at Citynow Company'
      },
      {
        key: 'gameloft-company',
        date: '10/2015',
        description: 'Join to fix bugs for asphalt Nitro and Pes',
        imgUrl: gameLoftLogo,
        tags: [
          {
            key: 'c-plus',
            name: 'C++'
          },
          {
            key: 'java',
            name: 'Java'
          }
        ],
        title: 'Game developer at GameLoft'
      },
      {
        key: 'fujinet-company',
        date: '07/2015',
        description: 'Fresher, learn to use java to build a website',
        imgUrl: fujinetLogo,
        tags: [
          {
            key: 'java',
            name: 'Java'
          },
          {
            key: 'strust',
            name: 'Strust - Spring - Hibernate'
          }
        ],
        title: 'Web developer at Fujinet company'
      },
      {
        key: 'hcmus-university',
        date: '09/2011',
        description: 'study about software developement',
        imgUrl: natureScienceLogo,
        tags: [
          {
            key: 'software-tech',
            name: 'Software technology'
          }
        ],
        title: 'Student at university of science'
      },
    ]
}

const defaultReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case DEFAULT_ACTION:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(DEFAULT_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(DEFAULT_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default defaultReducer