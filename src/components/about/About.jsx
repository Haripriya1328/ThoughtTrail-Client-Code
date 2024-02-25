/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


function Services () {
    let message = `"Our team is a group of dedicated and skilled professionals who work together to bring your vision to life.\n With diverse backgrounds and expertise, we bring creativity, innovation, and a passion for excellence to every project. Meet the people behind our success."`;
    return (
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center" style={{textAlign: 'center'}}>

                          <h2 class="section-title" style={{fontSize: '40px'}}>Meet Our Team</h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
          </div> 
             
           <div class="row">
           <div class="col-sm-6 col-md-4">

           <div class="team-item">
           
               <img src="data:image/jpeg;base64,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" class="team-img" alt="pic" />                   
               <h3>Hari Priya</h3>            
               <div class="team-info"><p>Head of SEO</p></div>
               <p>Harry is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
           
               <ul className="team-icon">
      <li>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={fab.faTwitter} />
        </a>
      </li>

      <li>
        <a href="#" className="pinterest">
          <FontAwesomeIcon icon={fab.faPinterest} />
        </a>
      </li>

      <li>
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={fab.faFacebook} />
        </a>
      </li>

      <li>
        <a href="#" className="dribble">
          <FontAwesomeIcon icon={fab.faDribbble} />
        </a>
      </li>
    </ul>
               
           
         </div>
     </div> 
       
     <div class="col-sm-6 col-md-4">

           <div class="team-item">
           
               <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
              
               <h3>Janani</h3>
               
               <div class="team-info"><p>SEO Specialist</p></div>

               <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
           
               <ul className="team-icon">
      <li>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={fab.faTwitter} />
        </a>
      </li>

      <li>
        <a href="#" className="pinterest">
          <FontAwesomeIcon icon={fab.faPinterest} />
        </a>
      </li>

      <li>
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={fab.faFacebook} />
        </a>
      </li>

      <li>
        <a href="#" className="dribble">
          <FontAwesomeIcon icon={fab.faDribbble} />
        </a>
      </li>
    </ul>
               
           </div>

     </div> 
     <div class="col-sm-6 col-md-4">

           <div class="team-item">
           
               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRUYGBgYGBgcGRoYGBwYGBkaGRgZGhgaGhgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAOsA1gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAIBAgQEAggFAgUFAQAAAAECAAMRBBIhMQVBUWEicQYTMoGRobHBQlLR8PFy4RQjYoKiBzNDksIV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwADAQEAAAAAAAAAAQIRAyExEiJBUWH/2gAMAwEAAhEDEQA/APMYRYQMRIsSMCEWJACEIQMkLR6rfSX8NhVvdwLef8xdNmgSWnQLdu50+s3a9REAAYe4fUzLrYs3OUxdKQlPBt00G55fGK9NCfaAt85CGdzuftLWHwB9pr6dP1h0cMemoGgvKTiaWJNxbaZbtCDhhMIy8UGaJOjY6JaBEhCJAAwhCAEIQgBCEIwsQhCZqEI6EDNhHRsQEUCJJUgaejS57ecZXqZRpz57mL64DU6yMU2qHQEyTk6rrmYyzSwpO/wmzhPR+sV8Kcr8thI3wxQ2OhEX5dPnBg8IE1PWXau1+XQSqtZY3FYlQtxe8cJQxtTflMlmljEVbmViZeYmiAMSEtKQGLGLHwIRsdCANiR8aRAEhCEAIQhALEIQkKOhCERmwgYkAURxawjREqHSAhaKF3Cid/wDg6quYjpYTk/RijnqnsP5+k7+g5uANgPnMfLq95G2JONvOlFDsTbWef8AG0Dkss3MfiWOhmO6yMzir7cxULLpKlSs3Wb3EKS++c7WSxm+eVnqcnYjJiRYTViSEWEABHiMEcpjI6EIQAhCNgBEixIAQhCAWBHRsdIUIQjYjESEIwW8a5hGtHw3R+glPNWe+wS/z0ne0lRAzMQLbX7zyzg+JdHOQ2JHxtynSY6q5oK+YkMWOpuQSdR5A3nP5c901xfTcxXGcNfLoTI6uKwrjQ5D8jOMwaF3CLuZZx9NqfhOvuIimZFVJxOmORvMOqkneoTGZLyp6Cg62iSxiEtK83zexhvPKIQhGgRViQEZJBCIIsAIQhAGxDFhAEhFhALMI2OkLEbCEASBiwIjM0xpjjGwKJsBWyOHy5jqAuupIsNt956RxbhbJg6eHPtkF3A5Fjmt7r290wP+mvBRXxPrXF0oWex51DfIPdYt7hOx43WBqM1+dvK0w8l9tcvPv/yMTRIqKrC+zC9tfvIKr1H8LM7NtYkkk+RnreBpq9NRoykaxycHpUj60ICRtfU9ZH5q+15/hPQytkFRwFFr+JrH4SljcCqaTruP8dOq7Dp/ecPjMWXJ1hLb9Nl4tZRKy9W1la03xeROs9Q2hJMsjmkrHWeLVNFYAnw97aG0bWwrLrbTqNpPhMdlXIwBXoRNGmysLqNOh2MzurmtfxzrLCEWWsbRCm6i3UdJVmmb2MdZ5eCEIRpNhCEAIQhAJ46EbIWIQiQMsQxbxsZAxQhiotzLKICSelvhFaIv8D49Uo0no0yVZ2LXG58IFvlLeG9KHUFHUOD+YbTmqdQo4dd1YEeYM1uI1EdhUXTMqk+dhf53mesyXv8ArbF76dX6JcdKBy3sFtB0J6S5xT0oJGUTiMLilRSL7xtSvm1vMrid6v8AqxjMaXOplF2jWaNLR8BtSQWj3aRMZrmC3hXMgjmjZpI5967RLnDnOYKDvKc0+AYQVKljew100i18GL+x2NU6g9JnToeL4YK/S854yfHVeX+URDFiGasSxsdCANhCEEpzCESQ1EIQjAiQMDGRc0d68ggj+esiJjCYuH1ZqYckZwLgyzhlXJ4hcgi3Sxvv3uJQpViuxnR+iWHp1PWrU2Kg97g6ESNeovGvbJ9Vc6CSPTyC3WadamiEqNgZmYuqCbCZS2t7eoCZG7RC8YWmkynvAxjIsCJURfZjteNhCWxt6J0XobhS9RnzFVQXYgXJvsBfynPql56NwDhwoYMsb56niPYW0Ez3qScXjN+uZ41iM1RrG47zDqHWauOXxNMcmHjV5b+shYQhNXMIQhAGwhCCk8IQkrFokWIYAhjTHGPpYd3vlUm2pPIeZj6Jm1GEJ2Ea9NhyMvPgCqFywBFvDrcg8wbW0lJmk9O559RSfDYlkbMpt17iRhrch7xeMMr6n4u1ccW1MrvVJkUJMzId3qlJgDEhKT1KDAmNUxTJbS+kcIRyLeUyk63PR7hhrVEpgbkX8uc9K9JXFOitNeQAA8hacR6FYxadW7flIHynZ4lxiG9nQfvXScm7fy9un+ceaY292JFt5kTsfSbBgXCicm+HYbg+Y1E28djPy+5DIQhNmAhCEEmxYkIKTwhCSokDCORCSANzA4mwWHzNdr5BvbfyF+c3KFFEdKbBWUEFsjAgrYMQGzAXtcbjW+sZh8OqhEysz5wMi6XWwPTc5t/OVFxlJA2ZWd72C+yi2OpJ3bTS2ki3rpxmZibEOr5ioYAAZVJz+YLaWHPb9Zm1sP8AiHP5TRSuthTtqSCeep2H0jMYmQqvM307dDFxnq9rFdLSPLL1ZL7D3yAU/EB1IlTSLmICsbJKj8ukSotiZcRTIQhAhJApI0BMs0cKqjM58l/WJXxh2QZRJ734uTk9oGoke0bducnw1HS8bg6JduttT9ptJhrCTq34eefUGAcpUU7a2+M9R4Yi5PABcjUhdL+Z3nmL07GekeiWKD0x1t/M5vJ8b5+sTjmDbxG041VOfKOs9a4zQBQm081NO1c+8yvFrpanDeJYekqeJQWymx2Og1NxvynNTW9IKl3Vei/Mn+wmQZ15c2oWEI2NmIQhBSzGwhIWQy3gaBIZ7jw7AnU3BvYdgDeVDNNURUtm8WmljyDFtf8A1ENfF+PPalFYXdnLq9syEEhje2W19wb3vpoD2EyXca2+e+/KXMmbJUqFsjNlJFiwC20UE8hbtMp9zba8nMa+TX4z0vYevkJfny8+Zi/4gu99zaw/X6yiWk2GNm3t1lc4wt7Vtky6GVq7205mWcTiVAsNW+QmaSSbxTP9K0S0iXGbfQSvl2/e+377ybPYEX5AfD+ZVLiuwipvLeCQM2u2ny5fKQsmsOnIVrn9YeqvtLeHwhbcacgPvN/gno+1Z7WJRNXI2/pEzuuK4i4Vw7JTDEatr8dpdrULCbOIoAMF27eUqYhNPjI70MPE09Ae86f0Er2L0zysR5G/6TDqpdD5zR9E3y1yOqfQ/wB5O53NaZvt2nEdUInnPF1yVA3Q6+R3noFd7zjfSGjckmZeL0004nir5qr9iB8ABKslxdMq5vz1+MhvO7N9ObWf4WNhAymYhCEAnhCAkLTYZRmBOoGp8hJ69Rcp0sTax5bkk69rCMwxygta/L7yZsabs7LcsDt4QAx1AHS1x2vJt9tvHPSmilrqLczrYbDv9JVq2ubDf5R5MMVTCsQGV7W8S3ynTlcA9vdHPo37iERc0SAlsOlUXNpLlFr9Tp5dfeZGp5SS1u8VOQ9ebHYfM/v7yuTJKlTYDYfWRgQgq3hRqB8T0mlw/hpqPmA8IO52kfC8AWPi2uNP3ynZcNwZYqiAXJ06DqTM9U76R8M4OWIpoNTu3QHkOk7/AIfgkw1PIvLVj1P6ROH4JaSgDfmTuTzMix+Iv4Osz1eQSe3OGkzu9S2iqT5ZjYfK8oYxLEjoJ2mEwahCp1zkfAbfeclxZRne22Y/WLNOsvJ4G8jK/CauTEU+6sPjr9peRfA3kfpOebEZcRSPRkHzsfrKvs8/XoxN5icbTWbdLxAATnuOcWw6GzPnb8qa/wDI6fWYZ+tr8cdxfD38XT6TImziONKx/wC0CO7G+xH9/dMyoyEEhSrX2vdbc99QffOvHZPbPU6rwiExZq579EIkIBYgIQEla4lNggIta2bcdxt13+MhqMxFifZFrdBf9TJWFtA24APS19ifcDK7gglQQRfcHQ9CO0zdGfURM9ztbS2gtyjXUWvfW+33iBjtHpYt4tB2G3xlI72HYdFCOzWvYBR1JP8AaV5MUNttrX98jKWF45WdnD6Nr6ySu6/gFh9fedTK6zXwHCGqeJzYdOZ7XhR1nUMMXvbYbn7TWwOFCg2Gtjr77TZXh+RLFMoANh36mQYXDkKSRpt/Em3pdT4Cjad/6N4DInrGHicadk5fHf4Tm/RzAetexHgTVunZfefkDO6qVAoudAJFoiPEVgNO1z5TKw7F6n70EhxeKv8A7vpyH3mlwrD5FzNu2p7DlMb+1aT0uFwtzyRb/KcLXfMW7lj8BOn4ristFjzckDyE5PDt4v8AafnLz/qafhaJYOOiMZxOOpuKumviGW3W+gnqHCsKP8PXfS+RgPhPMa+JIdj/AFW89QDKlONfjnpA7XoUzYbMV59gen71mbh+Bu3ifQd9/hNL0a4eAorOLk+zfkOs2MS8nv4+o065mpwpV5zJxeGKzpcS28y8QI86sP6wWhLGJpZT2ledOb2Obc5RCEJSViOTcecbJKY19xPyma4ldltz3N9tiNPnf5SGpkyrlvf8Vzt5C236GLUaxII5W32PWV2a0mRvbyGuALG+99OnSOdWChjazXINxc8vORtGgX06y+MbrldEmCyUlZgfGAwHS4BF/d9ZQxeHuqkb3II6d/KdHxjEB2WmmpAG3wA+k2sN6MqcH6yoVRi4JdiRlUe0oUe0T0mXeXol64bAYO5FhcnadlhOFikL1WKtuKaDO50/KNF/3ERMCi0QaiGy2ISoyWZyNCVBvkXfbWTNxB2XwrZT+KwQH3m1/dH2lapY/EPqFTIu13OZyPdoPrKWGps7BFBLMbAd5Jiapfdh5DX5mdR6KcLyf5rixIvr+FOvm3084avIJHQ8Jwa4ekF57sfzMef2HaZ3E8fmOX8K79z0jeJ8WzGybDQdyZlUkZ3FNdST/J8ple0/jT4VQ9YxqP7Km/mek1sdiMqE820EfQoBFFNdhueveZPGMUBUVeS2v9TJUzOPV/ElO/sKL/1HU/W3umZRPija+ILuzndiTGUW1lyekV1pqBMBUY/iuNO9h9Lzx7EvdiRtc/Wemek+KycPRL2Lm+nm1vlPKy+srMOO44U/+Sn9A+kdXfeUuFVv8pPL7mOrPM7PbWK1ZpQqNJ6zym7RxSGuARaZzC2kvVWlOpN8MvJPXTIQhNWKxHr+/jGR9ha5mdaZ+mVXJNzqT/AkJJN21Ntz8tYref8AaR377wi9U53uAOkSjTzMq/mZR8SBA6c/3aWeFUy1eko3aog6/jF79rSmden8FwtLDj/F11u7kikmxI5ueg7yZ6X+JPrKudKQPhNwiBRyRTq5PbnuZk42s/rTUds5XRSVGUW2ATUWA5Sx693IZ2ZmAuLnQE7WHl9ZhwddNTTDORTCqSgsisL2A6LsOuus5Hj1K9Y06eZzsefuHQCb3CEp0aT16gLMxIBGrbaKt+epN+0m4UlOknrMhRn/ADNmdh0U/hTvufhFLwfWPwTgqC1SoM7Xsici3fqB8POaXG8dkHqlNydXPUnlFxeKNIesFs7jw/6E5WHK/Lt5zBTxEu2oG/c8hF990f8ADlfTufpOn4JhMiZyPG407L/eZXA8D6x87Dwrqe55CdXaKiGO4RWc8gTOC4hiiSxJuT950vpNjciCnzbU+U4ivVuYSGmU+G8KJ1kVZ7KBH8LGeolP8zC/leXCq7/1AxJSnRog6BBmHc/xeedGdJ6bY3PiX6LoPIafac1LzOQ3QcHq2pAdC31v95Yq1LyvTphEQX1bNp/Tluf+QjS8y1PbXN9G1TKjNLZlKodY4avWaQGS1jIptmemW6SEIS2S1EqMLAEHrfttp8IsiqyGmUdQi5ttyvvbleNa2nzjj7Pv+0b+kYpst8KxAp1kqMbBWBuN5UMt8Jphq9NSLgsLjrC/EvRMMTXAampIO3hOvPf97TZwXAW9p2yg7ganTlfYTTw9MJTAXSw01Jt8Zh4nFOWPiO55zn1qnI0sfiKdMWCglRZAdVXvb8RmXSxRbNiKhLKDZQf/ACP0t+Ubn4TJxFQk6m+su8c0ZEGiqi2HIZjcxSD6q18Q9RyzG5JuTyEkpIXZUUabAffzMdh0Hqibbn7TU9HEGcm2wjDfwWHFNAg5b9zzkzPbU7CNMyvSCoRRNja7Ae7pBXOOV9IOI+sckHTl5DaYyNcxK58R842lvCEfiqsuej75Xap+RGYX62sNffMfEbzSwWmGrd8n1mk+FXLY+rndm6mNwaZnA9/wkT7y1wvdvIS/4a7jHu4/0rYeZNz/APPwjUeR1/aPnI1md9tJORcDSjX0JlpZVxm8Wfp2qjtGxITeRhq9LCEI0v/Z" class="team-img" alt="pic" />
              
               <h3>Sathvika</h3>
               
               <div class="team-info"><p>Marketing Manager</p></div>

               <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
           
               <ul className="team-icon">
      <li>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={fab.faTwitter} />
        </a>
      </li>

      <li>
        <a href="#" className="pinterest">
          <FontAwesomeIcon icon={fab.faPinterest} />
        </a>
      </li>

      <li>
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={fab.faFacebook} />
        </a>
      </li>

      <li>
        <a href="#" className="dribble">
          <FontAwesomeIcon icon={fab.faDribbble} />
        </a>
      </li>
    </ul>
               
           </div>

     </div> 
           </div>
        
        
    
    </div> 

    </section>
    )
}

export default Services;