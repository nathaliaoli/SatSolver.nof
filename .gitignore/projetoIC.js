

function readFormula(fileName) {
    var fs = require('fs');
    var conteudo = fs.readFileSync(simple0.cnf, 'utf8');
     //  an array containing lines of text extracted from the file.
    let text = conteudo.split('\n');
    
    // First read the lines of text of the file and only afterward use the auxiliary functions.
    for(let a = 0; a < text.length; a++){
        let busca= text[a];
        if(busca.charAt(0).equals('c')){
          a++;
        }
        else if (busca.charAt(0).equals('p')){
          var array = busca.split(' ');
          var numvar = parseInt(array[2], 10);
          var numcla = parseInt(array[3], 10);
        }
        else{
          let clauses = readClauses(text)
          let variables = readVariables(clauses)
        }
    }
    function readClauses(text){
        
        for(let f=0; f<text.length; f++){
            if(text[f]!=null && text[f].charAt(0)!='c' && text[f].charAt(0)!='p'){
                var arrayNum = text[f].split(' ');
                var arrayClauses;
                let b=0;
                while(b<arrayAux.length && parseInt('arrayNum[f]',10)!=0){
                    let num = parseInt('arrayNum[f]',10);
                    arrayAux.push(num);
                    b++;
                }
                if(parseInt('busca[b]',10)==0){
                    arrayClauses.push(arrayAux);
                    for(let c=0; c<arrayAux.length; c++){
                        arrayAux=null;
                    }
                }
            }
        }
    return arrayClauses;
    }
    function readVariables(clauses){
        for(let g = 0; g<clauses.length; g++){
            for(let h = 0; h<clauses[g].length; h++){
              var mod = Math.abs(clauses[g][h]);
              if(arrayVar.indexOf(mod) == -1){
                arrayVar.push(mod);
              }
            }
        }for(let i=0; i<arrayVar; i++){
            arrayVar[i]=0;
        }
    return arrayVar;
    }

    // In the following line, text is passed as an argument so that the function
    // is able to extract the problem specification.
    let specOk = checkProblemSpecification(text, clauses, variables)
    function checkProblemSpecification(text, clauses, variables){
        for(let a = 0; a < text.length; a++){
            let busca= text[a];
            if(busca.charAt(0).equals('c')){
              a++;
            }
            else if (busca.charAt(0).equals('p')){
              var array = busca.split(' ');
              var numvar = parseInt('array[2]', 10);
              var numcla = parseInt('array[3]', 10);
            }
        }
    }
  
    let result = { 'clauses': [numcla], 'variables': [numvar] }
    if (specOk) {
      result.clauses = clauses
      result.variables = variables
    }
    return result
   }

   // Receives the current assignment and produces the next one
   function nextAssignment(currentAssignment) {
    // implement here the code to produce the next assignment based on currentAssignment. 
   return newAssignment
   }

  function doSolve(clauses, assignment) {
    let isSat = false
    while ((!isSat) && /* must check whether this is the last assignment or not*/) {
      // does this assignment satisfy the formula? If so, make isSat true. 
  
      // if not, get the next assignment and try again. 
      assignment = nextAssignment(assignment)
    }
    let result = {'isSat': isSat, satisfyingAssignment: null}
    if (isSat) {
      result.satisfyingAssignment = assignment
    }
    return result
    }

   exports.solve = function(fileName) {
     let formula = readFormula(fileName)
     let result = doSolve(formula.clauses, formula.variables)
    return result // two fields: isSat and satisfyingAssignment
    }




  
