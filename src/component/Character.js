import React from 'react'
import { Link } from 'gatsby'
import DateTime from './dateTime'

function Character(props) {
  const {id, name, image, status, species, gender, created, location} = props.result
  console.log(created)
  return (
    <Link to={"/" + id}>
      <div className="card is-flex has-background-grey-darker" style={{borderRadius:20}}>
        <div className="card-image" style={{height:250}}>
          <img src={image} alt="error" style={{height:250, borderTopLeftRadius:20, borderBottomLeftRadius:20}}/>
        </div>
        <div className="card-content is-flex is-flex-direction-column">
          <h1 className="is-size-4 has-text-weight-bold has-text-primary">
            {name}
          </h1>
          <div className='mt-3'>
            <h2 className="is-size-6 has-text-white has-text-weight-medium">
              <span className={status==='Alive'? 'has-text-success': status==="Dead"? 'has-text-danger': 'has-text-warning'}>{status}</span>
              {` - ${species}`}
              <span className='is-size-6 has-text-warning'>{` (${gender})`}</span>
            </h2>
            <DateTime created={created}/>
          </div>
          <div className='mt-3'>
            <h2 className='is-size-5 has-text-light has-text-weight-bold'>First seen in:</h2>
            <h2 className='is-size-6 has-text-info'>{location.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Character