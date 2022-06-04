import React, { useState } from 'react';

function TaskList() {
  // states for handling the below alignItems
  //task lisk which has couple of preset data items
  // state to handle input box value
  // state to handle
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState(['a', 'b', 'c']);
  const [deleteClicked, setDeleteclicked] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setTaskList([...taskList, inputValue]);
    setInputValue('');
  };

  const handleDelete = (item) => {
    setDeleteclicked(true);
    var count = 0;
    var r = setInterval(() => {
      count = count + 1;
      let ind = taskList.indexOf(item);
      let arr1 = taskList.slice(0, ind);
      let arr2 = taskList.slice(ind + 1);
      setTaskList([...arr1, ...arr2]);
      setDeleteclicked(false);
      if (count > 0) {
        clearInterval(r);
      }
    }, 1000);
  };
  const handleSort = () => {
    let arr = taskList.sort();
    setTaskList([...arr]);
  };
  return (
    <div>
      <input type="text" onChange={handleInput} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleSort}>Sort</button>
      {deleteClicked ? <p>deleting..</p> : null}
      {taskList.map((item) => {
        return (
          <div>
            {
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '10px' }}>{item}</p>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
