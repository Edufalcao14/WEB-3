const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
      <img
        src="https://moodle.vinci.be/pluginfile.php/1/core_admin/logo/0x150/1612973627/LOGO%20HE%20VINCI.png"
        alt="logo vinci"
      />
    </div>
  );
};

export default Header;
