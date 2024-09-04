import React from 'react'

const CheckBox = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="row-from">
                    <h1>Billing Detailss</h1>
                    <div className="fromNumer">
                        <div className="mxt">
                            <label for="formFile" className="form-label"> Last Name</label>
                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="mxt1">
                            <label for="formFile" className="form-label">Last Name</label>
                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>

                <div className="row-from1">
                    <p>Stote / Country</p>
                    <div className="mb-3">

                        <select class="form-select" style={{ width: "800px", height: "50px" }} aria-label="Default select example">
                            <option selected>France</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="row-from2">
                    <p>Stote / Country</p>
                    <div className="mk-1">

                        <div className="mxt">

                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="mxt1">
                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>

                </div>

                <div className="row-from3">
                    <p>Stret Address</p>
                    <div className="mk-1">

                        <div className="mxt">

                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="mxt1">
                            <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                </div>
                <div className="city">
                    <div className="row-from3">
                        <p>Stret Address</p>
                        <div className="mk-1">

                            <div className="mxt">

                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="mxt1">
                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                        </div>

                        <div className="row-from5">

                            <div className="mxt">
                                <label for="formFile" className="form-label"> Last Name</label>
                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="mxt1">
                                <label for="formFile" className="form-label">Last Name</label>
                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                        </div>
                        <div className="mk-1">

                            <div className="mxt">
                                <label for="formFile" className="form-label"> Last Name</label>
                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="mxt1">
                                <label for="formFile" className="form-label">Last Name</label>
                                <input type="text" class="form-control" style={{ width: "400px", height: "50px" }} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CheckBox
