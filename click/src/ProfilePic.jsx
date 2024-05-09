
function ProfilePic(){

    const imageUrl = ".src/assets/pp.jpg";
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>

    );

}
export default ProfilePic