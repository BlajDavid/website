 function myFunction() {
  // Declare variables
  let a, txtValue;
  let input = document.getElementById('myInput');
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName('li');
  let href = ul.getElementsByTagName('a');
 
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
  // Variables to dispaly the information.
let heading = document.querySelector("h3");
let paragraph = document.getElementById("text");
let years = document.getElementById("years");
 
let description = ["(15 September 1890 – 12 January 1976)   Agatha Christie was an English writer. She is known for her 66 detective novels and 14 short story collections, particularly those revolving around her fictional detectives Hercule Poirot and Miss Marple. Christie also wrote the world's longest-running play, a murder mystery, The Mousetrap, and, under the pen name Mary Westmacott, six romances. In 1971 she was appointed a Dame Commander of the Order of the British Empire for her contribution to literature.",
"(7 November 1913 – 4 January 1960)   Albert Camus  was a French philosopher, author, and journalist. His views contributed to the rise of the philosophy known as absurdism. He wrote in his essay The Rebel that his whole life was devoted to opposing the philosophy of nihilism while still delving deeply into individual freedom. He won the Nobel Prize in Literature at the age of 44 in 1957, the second youngest recipient in history.",
"(29 January 1860 - 15 July 1904) Anton Cehov was a Russian playwright and short-story writer, who is considered to be among the greatest writers of short fiction in history. His career as a playwright produced four classics, and his best short stories are held in high esteem by writers and critics. Along with Henrik Ibsen and August Strindberg, Chekhov is often referred to as one of the three seminal figures in the birth of early modernism in the theatre.",
"(22 May 1859 – 7 July 1930) He was a British writer best known for his detective fiction featuring the character Sherlock Holmes. Originally a physician, in 1887 he published A Study in Scarlet, the first of four novels about Holmes and Dr. Watson. In addition, Doyle wrote over fifty short stories featuring the famous detective. The Sherlock Holmes stories are generally considered milestones in the field of crime fiction.",
"",
"",
"",
"",
"(8 February 1828 – 24 March 1905) was a French novelist, poet, and playwright.Jules Verne was born in the seaport of Nantes, he was trained to follow in his father's footsteps as a lawyer, but quit the profession early in life to write for magazines and the stage. His collaboration with the publisher Pierre-Jules Hetzel led to the creation of the Voyages extraordinaires, a widely popular series of scrupulously researched adventure novels including Journey to the Center of the Earth (1864), Twenty Thousand Leagues Under the Sea (1870), and Around the World in Eighty Days (1873)."
];

let ul = document.getElementById("myUL");
let href = ul.getElementsByTagName('a');

for (let i = 0; i < href.length; i++) {
    href[i].onclick = function name() {
    heading.textContent = href[i].textContent;    
   
    var parantheses = description[i].indexOf(')');
    var yearsOfLiving = description[i].slice(0, parantheses+1);
    years.textContent = yearsOfLiving;
    var biography = description[i].slice(parantheses+1, description[i].length);

    paragraph.textContent =  biography;

    
  }
} 

