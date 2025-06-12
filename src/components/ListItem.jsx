function ListItem({item, index}){

        const color = index % 2=== 0 ? "cornfloweblue" : "pink";
    return <div style={{backgroundColor: color}}>{item}</div>;
}
export default ListItem;