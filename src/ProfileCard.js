function ProfileCard(props) {
  const { data } = props;
  return (
    <div>
      <div>
        <img src={data.img} alt="logo" />
      </div>
      <h1>{data.title}</h1>
      <h3>{data.tag}</h3>
      <h1>{data.definition}</h1>
    </div>
  );
}

export default ProfileCard;
