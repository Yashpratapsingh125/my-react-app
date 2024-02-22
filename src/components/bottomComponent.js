export function BottomComponent({ data }) {
    console.log(data, 'DATA S')
    return (
        <div className="top-component">
            <h2>BottomComponent</h2>
            <h2>{data}</h2>
            {/* Add content here */}
        </div>
    );
}