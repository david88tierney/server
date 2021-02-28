exports.allAccess = (req, res) => {
  // Public Access HOME COMPONENT
    res.status(200).send("Public Content.");  
  };
  
  exports.pmBoard = (req, res) => {
    res.status(200).send("PM Content.");
  };

  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.pmoBoard = (req, res) => {
    res.status(200).send("PMO Content.");
  };