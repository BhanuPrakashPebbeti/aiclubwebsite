import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {SERVER_URL} from '../../EditableStuff/Config';

function TeamCard({ team, isadmin, isdelete }) {
  const navigate = useNavigate();
  const PostDelete = async (username) => {
    const confirmed = window.confirm(`Are you sure to delete the user ${username}?`);
    if(confirmed){
      const res = await axios.post(`${SERVER_URL}/team/delete/${username}`);
      if(res.status===200){
        console.log('User not deleted');
      }
      else if(res.status===201){
        // navigate('/team');
        window.location.reload(true);
      }
    }
  }
  return (
        <div className=' col-lg-3 col-md-4 col-sm-6 col-6'>
            <div className='card'>
              <img className='card-img-top' src={team.photo} alt={team.firstname} />
              <div className='card-body'>
                <h5>{team.firstname} {team.lastname}</h5>
                <h7>{team.profession}</h7>
                <p>{team.description}</p>
                <a href={`mailto:${team.email}`} >{team.email}</a>
                {
                  isadmin?
                  <div className='admin-opt'>
                    <span>
                      <a href={`/team/edit/${team.username}`}>Edit </a> 
                    </span>
                    {
                      isdelete?
                        null
                      :
                        <>
                          ·
                          <span> 
                            <a type="button" onClick={() => {PostDelete(team.username)}}>&nbsp;Delete</a>
                          </span>
                        </>
                    }
                    
                  </div>
                  :
                  ''
                }
              </div>   
            </div>
        </div>
  )
}

export default TeamCard