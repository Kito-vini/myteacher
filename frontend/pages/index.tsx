import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Marcus Vincius",
      foto: "https://avatars.githubusercontent.com/u/81711791?v=4",
      descricao: "Aulas de Banco de dados",
      valor_hora: 300,
    },
    {
      id: 2,
      nome: "Gonzaga",
      foto: "https://scontent.fsdu8-1.fna.fbcdn.net/v/t1.18169-9/10354894_539448022852369_7015644093505030010_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PSQcLOXRBe4AX-hT-PM&_nc_ht=scontent.fsdu8-1.fna&oh=00_AT8tw2Ip5SyyzA8EmqxItjqA4tleK967b6Fu5egGObslLQ&oe=636A3B60",
      descricao: "Aulas de Poly dance",
      valor_hora: 100,
    },
    {
      id: 3,
      nome: "Bruno",
      foto: "https://scontent.fsdu8-2.fna.fbcdn.net/v/t1.6435-9/46501291_1909969285789056_3557305584875208704_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=avbRqtbZ90cAX-D8f_O&_nc_ht=scontent.fsdu8-2.fna&oh=00_AT8YXd3DkFvBqLI5bWMLNp4IR5uHbHHtQPiMWzv5vZMZVA&oe=63694A15",
      descricao: "Aulas de distribuição de doce",
      valor_hora: 200,
    },
    {
      id: 4,
      nome: "Cesário",
      foto: "https://scontent.fsdu8-2.fna.fbcdn.net/v/t1.18169-9/20992734_1950621141892084_7819840562716437524_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f5oTtoLsPYQAX9no28b&tn=1a5Rh9cv-eOU9DHt&_nc_ht=scontent.fsdu8-2.fna&oh=00_AT-cRBUSVqbMDQKN2Zs54m9k5VEW48PgrYEBHqTVlHeUjQ&oe=636B240B",
      descricao: "Aulas de como cuidar dos cabelos",
      valor_hora: 50,
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>   
  )
}

export default Home
