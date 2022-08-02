
const CreateNewList = () => {
    return <>
        <h1>Create a new list</h1>
        <p>List your movie, TV & celebrity picks. </p>
        <form>
            <label>
                <span>List Title*</span>
            </label>
            <br />
            <input type="text" name="name" variant='flushed' />
            <br />
            <label>
                <span>List Description</span>
            </label>
            <br />
            <input type="text" name="name" variant='flushed' />
            <br />
            <select>
                <option>Titles</option>
                <option>People</option>
                <option>Images</option>
            </select>
        <input type="checkbox" name="name" variant='flushed' /> 
        <label>
            <span>Public List</span>
            <p>Make the list visible to others</p>
        </label>
        <br />
        <input type="submit" value="Create" />
        </form>
    </>
}
export default CreateNewList;