import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <div className="footer">
        Created By <span style={{color:'red', marginLeft:'5px'}}>❤</span>
        <a
          href="https://www.linkedin.com/in/ashish-yadav7/"
          target="_blank"
          title="Ashish's LinkedIn profile"
        >
          Ashish Yadav
        </a>
        <span style={{fontWeight:"bold", marginLeft:'4px', marginRight:'4px'}}> © </span>
        {year}
        <a
          href="https://ashish07-portfolio.netlify.app/"
          target="_blank"
          title="Ashish's portfolio"
        >
          <strong>
            Tax Calculator
          </strong>
        </a>
      </div>
    );
  };
  
  export default Footer;