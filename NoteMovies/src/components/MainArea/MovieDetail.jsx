import { Button, Container, Typography } from "@mui/material"

const MovieDetail = (props) => {
  const movies = [
    { id: 27205, genre_ids: [28], title: "A Origem", release_date: "2010-07-15", vote_average: 8.4, overview: "Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos, recebe a tarefa inversa de plantar uma ideia na mente de um Diretor Executivo.", poster_path: "/k3UoZhRHg6h2XYzwNAJJvGC2yev.jpg", backdrop_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg" },
    { id: 155, genre_ids: [28], title: "Batman: O Cavaleiro das Trevas", release_date: "2008-07-14", vote_average: 8.5, overview: "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.", poster_path: "/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg", backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg" },
    { id: 19995, genre_ids: [28], title: "Avatar", release_date: "2009-12-15", vote_average: 7.6, overview: "Apesar de não ter mais os movimentos da perna, o ex-fuzileiro naval Jake Sully ainda sente que pode ser um guerreiro. Sua intuição começa a se tornar realidade quando ele viaja anos-luz até a estação espacial montada no Planeta Pandora. Habitado por grandes seres azuis, os Navi, o local tem uma atmosfera fatal para qualquer terrestre. Por isso, oficiais criaram o programa Avatar, em que um corpo biológico, híbrido de humano e Navi, pode ser comandado a distância.", poster_path: "/8x4TSGxaIIzTgQXyplBn1Y8mjlX.jpg", backdrop_path: "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg" },
    { id: 157336, genre_ids: [878], title: "Interestelar", release_date: "2014-11-05", vote_average: 8.4, overview: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.", poster_path: "/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg", backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", prime: "/0GURDFFNEFFK5UUUGQ3JT3HN1T/ref=atv_dl_rdr?tag=justbrrsjd-20", HBO: "GYGP7pwQv_ojDXAEAAAFc:type:feature" },
    { id: 24428, genre_ids: [878], title: "Os Vingadores: The Avengers", release_date: "2012-04-25", vote_average: 7.7, overview: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.", poster_path: "/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg", backdrop_path: "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg" },
    { id: 299536, genre_ids: [878], title: "Vingadores: Guerra Infinita", release_date: "2018-04-25", vote_average: 8.3, overview: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.", poster_path: "/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg", backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg" },
    { id: 22970, genre_ids: [27], title: "O Segredo da Cabana", release_date: "2012-04-12", vote_average: 6.6, overview: "Cinco amigos fazem uma pausa em uma cabana remota, onde conseguem mais do que esperavam, descobrindo a verdade atrás da cabana na floresta.", poster_path: "/raOYAZFVpWyL9teEzLDEwtP8lm9.jpg", backdrop_path: "/5iiVfPS6LsAqmVQVOzhyCHhCFgU.jpg" },
    { id: 9552, genre_ids: [27], title: "O Exorcista", release_date: "1973-12-26", vote_average: 7.7, overview: "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.", poster_path: "/mdKnZaCbNWq8CMhN8GxGZXIEC9j.jpg", backdrop_path: "/xcjJ5khg2yzOa282mza39Lbrm7j.jpg" },
    { id: 300669, genre_ids: [27], title: "O Homem nas Trevas", release_date: "2016-06-08", vote_average: 7, overview: "Três jovens ladrões lutam por suas vidas depois de invadir a casa de um homem cego que tem seu lado obscuro.", poster_path: "/6F9QUWhGpZtYH0ibbuLJ49k91tZ.jpg", backdrop_path: "/bbwS32U9apV3c1fInFkyG1oi7L2.jpg" },
    { id: 222935, genre_ids: [10749, 18], title: "A Culpa é das Estrelas", release_date: "2014-05-16", vote_average: 7.6, overview: "Hazel e Gus dividem um senso de humor sarcástico, um desgosto por convenções sociais e, por fim uma amor que vai levá-lo para uma jornada transformadora e inesquecível. Embora os dois adolescentes enfrentem desafios extraordinários, sua coragem e dedicação ao outro provam que a vida pode não ser perfeita, mas o amor é.", poster_path: "/lW1HA1JqXxKp1x5eSzEqTNxfIgA.jpg", backdrop_path: "/oQaVV7p916HO5MDI820zzs1pin9.jpg" },
    { id: 11036, genre_ids: [10749, 18], title: "Diário de uma Paixão", release_date: "2004-06-25", vote_average: 7.9, overview: "Na década de 40, o operário Noah Calhoun e a rica Allie estão desesperadamente apaixonados, mas os pais da jovem não aprovam o namoro. Quando Noah vai para a Segunda Guerra Mundial, parece ser o fim do romance. Enquanto isso, Allie se envolve com outro homem. Mas quando Noah retorna para a pequena cidade anos mais tarde, próximo ao casamento de Allie, logo se torna claro que a paixão ainda não acabou.", poster_path: "/A07izLVyZCrmq0HTvFg6qdqiZE5.jpg", backdrop_path: "/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg" },
    { id: 266856, genre_ids: [18, 10749], title: "A Teoria de Tudo", release_date: "2014-11-26", vote_average: 7.9, overview: "Baseado na biografia de Stephen Hawking, o filme mostra como o jovem astrofísico fez descobertas importantes sobre o tempo, além de retratar o seu romance com a aluna de Cambridge Jane Wide e a descoberta de uma doença motora degenerativa quando tinha apenas 21 anos.", poster_path: "/6q1XGbTJQqOGUpX9OlO0bGmtpql.jpg", backdrop_path: "/ke3lanTAgCqPMpOyutIfXzYih2s.jpg" },
  ]

  const link = "https://image.tmdb.org/t/p/w500"

  const rerouteTohbomax = () => window.open("https://play.hbomax.com/page/urn:hbo:page:GYGP7pwQv_ojDXAEAAAFc:type:feature", "_blank")
  const rerouteToPrime = () => window.open("https://www.primevideo.com/detail/0GURDFFNEFFK5UUUGQ3JT3HN1T/ref=atv_dl_rdr?tag=justbrrsjd-20", "_blank")

  return (
    <Container maxWidth="100%" disableGutters style={{ display: "flex" }}>
      <Container disableGutters style={{ width: "200px" }}>
        <Typography>14/07/2008</Typography>
        <img src="https://image.tmdb.org/t/p/w500/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg" style={{ height: "300px" }} />
      </Container>
      <Container maxWidth="100%" style={{ display: "block", justifyContent: "center", alignItems: "center" }}>
        <Typography>Interestelar</Typography>
        <Typography variant="h6" style={{ margin: "5px", color: "#fff", textAlign: "center" }}>
          As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
        </Typography>
        <Button
          onClick={() => {
            rerouteTohbomax()
          }}
          style={{ backgroundColor: "#fff", margin: "4px" }}
        >
          HBO
        </Button>

        <Button onClick={() => rerouteToPrime()} style={{ backgroundColor: "#fff", margin: "4px" }}>
          Prime
        </Button>
      </Container>
    </Container>
  )
}

export default MovieDetail
