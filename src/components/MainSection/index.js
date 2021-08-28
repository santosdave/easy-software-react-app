import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IconButton } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';
import "./style.css";
import UserSection from '../UserSection';
import data from "../../data";
const userData=data.sort((a,b)=> parseFloat(a.createdAT) - parseFloat(b.createdAT));
function MainSection() {
    const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    return (
        <div className="main_section">
            <div className="profile_section">
               
                <Card className="profile_card">
                    <CardActionArea>
                        <CardMedia className="profile_image" title="Profile Image" image='https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'/>
                        <CardContent className="profile_content">
                            <h2>Santos Dave</h2>
                            <h4>Software Engineer intern</h4>
                            <Divider/>
                            <div className="profile_details">
                                <h2>Email</h2>
                                <h4>Santosdave@gmail.com</h4>
                            </div>
                            <Divider/>
                            <div className="profile_details">
                                <h2>Phone</h2>
                                <h4>0787654321</h4>
                            </div>
                            <Divider/>
                            <div className="profile_details">
                                <h2>Country</h2>
                                <h4>Kenya</h4>
                            </div>
                            <Divider/>
                            <div className="profile_details">
                                <h2>State/Region</h2>
                                <h4>Kiambu</h4>
                            </div>
                            <Divider/>
                            <div className="profile_details">
                                <h2>Address</h2>
                                <h4>Ruiru</h4>
                            </div>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="profile_details_icons">
                        <IconButton>
                            <EditIcon color="primary"/>
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon color="primary"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
            <Grid container className={"user_grid"} spacing={2}>
                    <Grid  item xs={12}>
                        <Grid container justifyContent="center" spacing={1}>
                            {userData.map((item) => (
                                <Grid key={item.id} item>
                                    <UserSection   name={item.name} phonenumber={item.phoneNumber} date={item.createdAt} src={item.avatar} username={item.username} email={item.email}/>  
                                </Grid>
                            ))}
                            
                        </Grid>

                    </Grid>
                    <div className={"pagination"}>
                        <TablePagination
                        component={"div"}
                        count={100}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    
            </Grid>
           
            {/* <div className="users_section">
                <UserSection/>
                <div>
                     
                </div>
                <div>
                   
                </div>
                <div>
                    <UserSection/>  
                </div>
                <div>
                    <UserSection/>  
                </div>
            </div> */}
        </div>
    )
}

export default MainSection
