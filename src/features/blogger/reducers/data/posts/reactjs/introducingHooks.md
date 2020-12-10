# Giới thiệu về Hooks

Hook được đưa lên từ phiên bản React 16.8 để giúp bạn quản lý state và các tính năng khác mà không sữ dụng class
``
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
``
Phía trên là ví dụ về cách sữ dụng state trong function component.

Nguồn tham khảo: [This link](https://reactjs.org/docs/hooks-intro.html#gatsby-focus-wrapper)
