
const Header = ({ SqlQuery, setQueryResult }) => {

    async function HandleClick() {
        setQueryResult(null);
        const rawResponse = await fetch('https://sqlmaestro.onrender.com/api/v1/runsql', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query:SqlQuery})
        });

        const Response = await rawResponse.json();
        setQueryResult(Response)

    }



    return (
        <div className=" h-[6vh] flex justify-between items-center border-e  bg-[#2C2E34]">
            <div className="ms-[33px] px-5 py-2 bg-[#181818] w-auto ">
                <p className="text-xl ">Input</p>
            </div>

            <div className="bg-[#0456F2] px-2 py-1 me-[33px] rounded font-bold">
                <button onClick={HandleClick}>Run SQL</button>
            </div>
        </div>
    );
}

export default Header;