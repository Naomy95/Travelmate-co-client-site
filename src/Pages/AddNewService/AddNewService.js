import React,{useRef} from 'react'

const AddNewService = () => {
        const idRef = useRef();
        const nameRef = useRef();
        const imgRef = useRef();
      
        const descriptionRef = useRef();
       
    
        const handleAddUser = e => {
            const idString = idRef.current.value;
            const id = parseInt(idString);
            const name = nameRef.current.value;
           
            const img = imgRef.current.value;
            const p = descriptionRef.current.value;
          
    
            if (id !== "null" && name !== "" && p !== "" && img !== "") {
                const newUser = { id, name, p, img};
                fetch('https://fathomless-waters-16435.herokuapp.com/details', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('User added Successfully.')
                            e.target.reset();
                        }
                    })
                e.preventDefault();
            }
            else {
                alert('Please Fill All the Information')
            }
    
        }



  return (
    <div className="m-5 d-flex justify-content-center">
            <form onSubmit={handleAddUser}>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service ID (only integer numbers)</label>
                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" ref={idRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Image Link</label>
                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" ref={imgRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Name</label>
                    <input type="text" class="form-control" id="exampleInputText" ref={nameRef} />
                </div>
                
              
                <div class="form-group">
                    <label for="exampleFormControlTextarea3">Service Description</label>
                    <textarea cols="50" class="form-control" id="exampleFormControlTextarea3" rows="7" ref={descriptionRef}></textarea>
                </div>
                <button type="submit" class="my-4 btn btn-primary">Submit</button>
            </form>
        </div>
    );
};


export default AddNewService;