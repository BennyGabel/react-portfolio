import React, { Component }  from 'react';
import './contact.css';
import logo from '../img/bentek.jpg'

// Create function
const Contact = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="Benny Gabel" style={{ width: '650px', height: '200px'}}/> 
                
            </div>
            <div id="subtitle">
                Contact Me
            </div>
            <div id="content">
                <table>

                    <tr>
                        <th>

                        </th>
                        <th>
                            
                        </th>
                    </tr>
                    <tr>


                        <td>
                            Name:
                        </td>
                        <td>
                            Benny Gabel
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Profile:
                        </td>
                        <td>
                            Software and Full stack Web developer
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>
                            benny@ben-tek.com
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Phone:
                        </td>
                        <td>
                            (646) 242-4323
                        </td>
                    </tr>



                </table>
            </div>
        </div>
    )
}

// Export Function 
// module.exports = Contact
export default Contact