import React,
{
    useState,
    useEffect
} from "react";
import axios from "axios";
// import StudentForm
//     from "./StudentForm";

// EditContent Component
const EditContent = (props) => {
    const [formValues, setFormValues] =
        useState(
            {
                content: ""
            }
        );

    //onSubmit handler
    const onSubmit = (contentObject) => {
        axios
            .put(
                "http://localhost:8080/api/update/" +
                props.match.params.id,
                contentObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("content successfully updated");
                    props.history.push("/content-list");
                } else Promise.reject();
            })
            .catch(
                (err) =>
                    alert("Something went wrong")
            );
    };

    // Load data from server and reinitialize student form
    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/api/update/"
                + props.match.params.id
            )
            .then((res) => {
                const {
                    content
                } = res.data;
                setFormValues(
                    {
                        content
                    });
            })
            .catch(
                (err) =>
                    console.log(err)
            );
    }, []);

    // Return student form
    return (
        <div
            onSubmit={onSubmit}
            enableReinitialize>
            Update Student
        </div>
    );
};

// Export EditStudent Component
export default EditContent;