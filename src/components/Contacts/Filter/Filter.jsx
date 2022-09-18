export function Filter({findContact}) {
    return <label > Find contacts by name 
        <input type="text" name="serch" onChange={findContact}/>
    </label>      
}