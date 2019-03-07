import React from 'react';



function AdminTest() {
  return (
    <div className="container-fluid">

      <div className="card">

        <form>

          <div className="form-group">
            <label for="itemUpdate">What item would you like to update?</label>
            <select className="form-control" id="itemUpdate">
              <option>Rampur</option>
              <option>Clontarf</option>
              <option>Amrut Fusion</option>
              <option>Hine Rare VSOP</option>
              <option>Mejor Tequila Pink</option>
              <option>Tito's Handmade Vodka</option>
            </select>
          </div>

          <div className="form-group">
            <label for="typeOfUpdate">How would you like to update this item?</label>
            <select className="form-control" id="typeOfUpdate">
              <option>Update Product Name</option>
              <option>Update Volume (mL)</option>
              <option>Update Abv (%alc./vol.)</option>
              <option>Update Category</option>
              <option>Update Type</option>
              <option>Update Sub-Type</option>
              <option>Update Country</option>
              <option>Update Price</option>
              <option>Update Description</option>
              <option>DELETE PRODUCT</option>
            </select>
          </div>

          <div className="form-group">
            <label for="admin-input">What would you like to set the new value to, if applicable?</label>
            <textarea className="form-control" id="adminInput" rows="3"></textarea>
          </div>

        </form>
      </div>

    </div>
  )
}



export default AdminTest;