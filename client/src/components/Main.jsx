import React from 'react'
import styles from '../styles/Main.module.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}> 
        <h1 className={styles.heading}>Join</h1>
      
        <form className={styles.form}>
        <div className={styles.group}>
          <input 
          type='text' 
          name='username' 
          value =''
          placeholder='Enter your name'
          className={styles.input} 
          onChange={() => {}} 
          autoComplete='off'
          required
          />
        </div>
        <div className={styles.group}>
          <input 
          type='text' 
          name='room' 
          value =''
          placeholder='Enter your room'
          className={styles.input} 
          onChange={() => {}} 
          autoComplete='off'
          required
          />
        </div>
        <Link to={`/chat?`}>
        <button type='submit' className={styles.button}>
          Sign in
        </button>
        </Link>
        </form>
      </div>
    </div>
  )
}

export default Main