import React from 'react'

const Table = ({headers, body}) => {
    console.log(body)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-1">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {headers?.map((header, index) => {
                                    return <th key={index}>{header.title}</th>
                                })}
                            </tr>
                        </thead>

                        <tbody>
                             
                            {
                                body?.map((item, index) => {
                                    return <tr key={index}>
                                        <td></td>
                                        {/* {headers?.map((header, i) => {
                                            return <td key={i}>{item[header.value]}</td>
                                        })} */}
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table