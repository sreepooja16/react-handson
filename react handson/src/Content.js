import React from 'react';

export class Content extends React.Component{
    state = {
        empData:[]
    }

    async remove(empId)  {
        await fetch("http://localhost:8016/api/employee/" +empId,{
          method: 'DELETE',
          headers:
          {
            'Accept':'application/json',
            'Content-Type':'application/json'
          }
        }).then(()=>{
          let updatedEmployees=[...this.state.empData].filter(i=>i.eId!==empId);
          this.setState({empData:updatedEmployees});
        });
        
        }
      
    componentDidMount(){
        fetch('http://localhost:8016/api/employee/all')
        .then(response => response.json())
        .then(data => this.setState({empData: data}))
    }
    render() {
        const empList = this.state.empData.map((emp, i) => {
            return  <tr>
                        <td>{emp.eId}</td>
                        <td>{emp.eName}</td>
                        <td>{emp.eSalary}</td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={()=> this.remove(emp.eId)}>
                                Delete
                            </button>
                        </td>
                    </tr>
        });
        return (
            <div align="center" >
                <p>Content!! {this.dataText}</p>
                <table border="strong">
                    <thead>
                        <tr>
                            <td>Emp Id</td>
                            <td>Emp Name</td>
                            <td>Emp Salary</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empList}
                    </tbody>
                </table>
            </div>
        );
    }
     }