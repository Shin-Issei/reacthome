function KeyRemoval(props){
// let keyID = props.key;
let deleteEntry = props.del

return(
    <div>
        <li>Literally Anything <button onClick={deleteEntry}>X</button> </li>
    </div>
)
}

export default KeyRemoval;