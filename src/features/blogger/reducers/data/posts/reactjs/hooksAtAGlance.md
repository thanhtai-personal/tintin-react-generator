# Sơ lược về React Hooks <br><br>

<italicText>Hook được đưa lên từ phiên bản React 16.8 để giúp bạn quản lý state và các tính năng khác mà không sữ dụng class.</italicText><br><br>
1. <boldText> State Hook: </boldText><br>

Ví dụ về useState trong Hooks:<br>

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
** Gọi ở trong một function component để thêm một vài local state cho nó.
** Nhận vào một giá trị lấy làm giá trị mặc định cho state. Ví dụ ở đây mặc định của count là 0.
** Trả về một bộ 2 gồm giá trị và phương thức gán giá trị cho state. Ở đây là state count và phương thức setCount.
** Trong một component, bạn cũng có thể sữ dụng nhiều hơn 1 state hook

```
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

<br><boldText> Hooks là gì? </boldText><br>
** Hooks là những hàm mà nó giúp bạn móc vào trong React state và React life cycle (vòng đời React) từ function component.
** Hooks không làm việc trong class. Nó giúp bạn làm việc với react mà không cần sữ dụng class component vì nó bổ sung được những chức năng của class vào trong function.
** Dù Hooks giúp function component thay thế class nhưng không bắt buộc phải sữ dụng khi, class component vẫn sẽ được giữ lại.<br><br>


2. <boldText> Effect Hook (useEffect) </boldText>

** useEffect giúp bạn xữ lý những side effects, tái hiện các phương thức trong vòng đời của React class như componentDidMount, componentDidUpdate,... vào trong function component.
** Ví dụ: Đặt title cho trang web

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
** Effect được tạo ra trong function component, nơi mà bạn có thể lấy được state và props của component để xữ lý.
** Mặc định thì React chạy effect sau mỗi lần render, kể cả lần render đàu tiên.
** Effect cũng cung cấp cách để clear resource sau khi không cần dùng đến nó nữa. Ví dụ trong đoạn code dưới đây:

```
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

** Giống với useState, bạn cũng có thể dùng nhiều useEffect trong một component. Ví dụ:

```
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
```
** Tham khảo thêm tại [Sữ dụng Effect Hooks](https://reactjs.org/docs/hooks-effect.html)


3. <boldText>Quy định về Hooks</boldText><br>

** Chỉ gọi Hooks ở top level. Không gọi hook trong các vòng lặp, điề kiện hay các hàm lồng nhau.
** Chỉ gọi Hooks trong React function components. Không gọi trong các hàm javascript thông thường.
** Tham khảo thêm tại [Quy định về Hooks](https://reactjs.org/docs/hooks-rules.html)<br>


4. <boldText>Tạo mới các Hooks riêng</boldText><br>

** Quan trọng của việc được phép tạo các Hooks cá nhân là nó giúp bạn tái sữ dụng logic giữa các component.
** Ở cách truyền thống, thì bạn sữ dụng [HOC](https://reactjs.org/docs/higher-order-components.html) hay [render props](https://reactjs.org/docs/render-props.html), và so với custom Hooks thì các phương pháp này thêm nhiều components vào cây components của bạn hơn.
** Ví dụ về một custom Hooks và việc tái sữ dụng logic:

```
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

```
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

** Khi tái sữ dụng logic bằng custom hooks thì các bộ state ở các components sữ dụng độc lập với nhau.
** Bạn cũng có thể sữ dụng 1 custom hook nhiều lần trong 1 function component.
** Tham khảo thêm tại: [Tạo hooks riêng của bạn](https://reactjs.org/docs/hooks-custom.html)<br>


5. <boldText>Các Hooks khác</boldText><br>

** <italicText>useContext</italicText>

```
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```

```
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

* Tham khảo thêm tại [HOOKs APIs](https://reactjs.org/docs/hooks-reference.html)

Nguồn tham khảo: [React documents - Hooks Overview](https://reactjs.org/docs/hooks-overview.html)<br><br><br>
<endArea>| [Introducing hooks](/blogger/introducingHooks) | \~\~\~\~\~\~\~END~\~\~\~\~\~\~ | [Next](/blogger/usingTheStateHooks) |</endArea>