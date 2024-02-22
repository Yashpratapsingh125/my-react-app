export function Column(data, handlePutRequest, updating) {
    console.log(updating, 'data')
    return (
        <div className="">
            <div>
                {data && data.data?.result?.length ? data.data.result.map((content, index) => (
                <ul key={index}>
                    {!updating ? <li>{content.content}</li> : <text>{content.content}</text>}
                    <button onClick={(content)=>handlePutRequest(content.id, 'string')}>Update</button>

                </ul>
                ))
                    :
                    <text>'NO DATA TO SHOW'</text>}
            </div>
        </div>
    );
}