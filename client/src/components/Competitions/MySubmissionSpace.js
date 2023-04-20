import React, { useEffect, useState } from 'react'

const MySubmissionSpace = ({ l, index }) => {
    const [updatedAt, setUpdatedAt] = useState("0 sec ago");
    var s = {
        day: 86400, // feel free to add your own row
        hour: 3600,
        min: 60,
        sec: 1,
    };
    useEffect(() => {
        if (l) {
            var r = {};
            let present = new Date();
            let start = new Date(l.createdAt);
            var d = Math.abs(start - present) / 1000;
            Object.keys(s).every((key) => {
                r[key] = Math.floor(d / s[key]);
                d -= r[key] * s[key];
                if (r[key] !== 0) {
                    // if (r[key] === 1) {
                    //     setUpdatedAt(`${r[key]} ${key.slice(0, -1)} ago`);
                    // } else {
                    setUpdatedAt(`${r[key]} ${key} ago`);
                    // }
                    return false;
                }
                return true;
            })
        }
    }, [l]);
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                {/* <th>{names[index]}</th> */}
                {/* <th>{l.team}</th> */}
                <th>{l.publicScore['$numberDecimal'].toLocaleString()}</th>
                {/* <th>{l.numSubmissions}</th> */}
                <th>{updatedAt}</th>
                <th>{(l.submissionLog !== null) &&
                    <h3 className="p-2" data-bs-toggle="modal" data-bs-target="#sandBoxSubmissionLog" type="button">{(l.submissionLog === "") ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16" style={{ "color": "green" }}>
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16" style={{ "color": "red" }}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>}</h3>
                }</th>
            </tr>
        </>
    )
}

export default MySubmissionSpace