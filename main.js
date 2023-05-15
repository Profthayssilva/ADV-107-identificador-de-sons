// Defina a função startClassification: Primeiro, definiremos uma função que será chamada ao
// pressionarmos o botão iniciar
function startClassification()
{
  // escrever o código para acessar o microfone
  navigator.mediaDevices.getUserMedia({ audio: true});
//   Em seguida, precisamos passar uma função que iniciará a classificação de sons
// ml5.

  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json', modelReady);
}

// Defina a função modelReady
function modelReady()
{
//   precisamos chamar a função predefinida de ml5.js utilizada para comparar o áudio
// do microfone com do modelo.
  classifier.classify( gotResults);
}

// A função gotResults conterá o resultado da comparação. Agora, começamos a definir a função
// gotResults
function gotResults(error, results) 
{
//   A função gotResults, a qual contém o resultado da comparação possui dois parâmetros dentro dela -
// um é error (erro) e o outro é o results (resultado).

  if (error) 
  {
    console.error(error);
  } 
  else 
  {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir: '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão: '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Palmas") 
    {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } 
    else if (results[0].label == "Sino") 
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } 
    else if (results[0].label == "Estalos") 
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }
    else
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}
