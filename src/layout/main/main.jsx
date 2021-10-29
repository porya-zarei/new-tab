import classes from './main.module.scss'
const Main = ({children}) => {
    return ( 
        <main className={classes.main}>
            {children}
        </main>
     );
}
 
export default Main;