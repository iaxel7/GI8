function makePII(name, ssn) {
    // Private variables
    const pii = {
      name: name,
      SSN: ssn
    };
  
    // Public methods
    return {
      getName: function() {
        return pii.name;
      },
      getSSN: function() {
        return "Access denied"; // Prevents access to the SSN
      }
    };
  }
  // Creating a PII object
  const patient2 = makePII("Axel", "412-45-7889");
  // access to properties directly
  console.log(patient2.name); 
  console.log(patient2.ssn); 
  // Accessing properties through public methods
  console.log(patient2.getName()); // Output: Axel
  console.log(patient2.getSSN()); // Output: Access denied
  
