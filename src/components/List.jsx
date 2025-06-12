import React, { Children } from 'react';
import styles from "./List.module.css"
import ListItem from './ListItem';


function List({title, type, items, children}) { //props

    if (children){
        <h2 className={styles.title}>{title}</h2>
        return <>{children}</>;
    }
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            {type === "ordered" ? (
                <ol>
                    {items.map((item, index) => (
                        <li key={index}>
                            <ListItem item={item} index={index}/>
                        </li>
                    ))}
                </ol>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <ListItem item={item} index={index}/>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default List;
