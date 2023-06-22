import PageCover from "../Shared/PageCover/PageCover";
import coverImg from "../../assets/coverpage.jpg"; 
import Instructors from "../Home/Instructors/Instructors";
const Instructor = () => {
    return (
        <div>
            <h1>Test Instructors Page</h1>
            <PageCover img={coverImg} title="Instructors"></PageCover>
            <Instructors></Instructors>
        </div>
    );
};

export default Instructor;