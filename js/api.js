const sendData = (onSuccess, onFail, formData) => {
  fetch('http://localhost:3333/po_entries',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: formData
    })
    .then((response) => {
      if (response.ok) {onSuccess()}
      else {onFail();}
    })
    .catch(() => {onFail();});
};

const updatePOEntry = (onSuccess, onFail, formData) => {
  fetch('http://localhost:3333/po_entries/update',
    {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: formData
    })
    .then((response) => {
      if (response.ok) {onSuccess()}
      else {onFail();}
    })
    .catch(() => {onFail();});
};

const getData = (onSuccess, onFail) => {
  fetch('http://localhost:3333/po_entries')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {onSuccess(data);})
    .catch((err) => {onFail(err);});
};

const getUsers = (onSuccess, onFail) => {
  fetch('http://localhost:3333/users')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {onSuccess(data);})
    .catch((err) => {onFail(err);});
};
export { getData, sendData, getUsers, updatePOEntry };
