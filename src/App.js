import { 
  Container, Button, Divider, Flag, Icon, 
  Header, Image, Input, Label, Grid 
} from "semantic-ui-react";
import foto from "./foto.png";

function App() {
  return (
    <Grid verticalAlign="middle">
      <Grid.Row columns={3}>
        <Grid.Column textAlign="right">
          <Flag name="id"/>
          &emsp;&emsp;&emsp;&emsp;
          <Icon name="angle left" size="large"/>
          &emsp;&emsp;&emsp;&emsp;
          <Icon name="angle right" size="large"/>
        </Grid.Column>
        <Grid.Column>
          <Input placeholder="Search..." iconPosition="right" icon="star" fluid/>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3">
            <Image src={foto} size="avatar" circular/>
            Nurizki
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider horizontal>Selamat Datang !!!</Divider>
      <Grid.Row>
        <Grid.Column>
          <Container textAlign="right">
            <Label as="a" color="teal" tag>SPORT</Label>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Container textAlign="center">
            <p>Pelatih Timnas Indonesia U-16 Bima Sakti berpesan kepada anak-anak 
              asuhnya dan pecinta sepakbola Tanah Air agar menaruh respek kepada 
              setiap calon lawan Garuda Asia. Pesan itu disampaikan Bima selepas tim 
              asuhannya memastikan langkah ke babak semifinal Piala AFF U-16 2022 lewat 
              kemenangan 2-1 atas Vietnam 2-1 pada laga ketiga Grup A di Stadion 
              Maguwoharjo, Sleman, Sabtu (6/8) malam. Sementara nasib The Young Golden 
              Star akan ditentukan klasemen akhir Grup C. Bima berpesan kepada 
              pasukannya untuk tidak menodai jalannya pertandingan dengan mengabaikan 
              prinsip fair play, termasuk mengimbau para suporter agar tak menyalakan 
              flare atau cerawat di fase semifinal nanti.
            </p>
            <Button.Group>
              <Button icon color="teal"><Icon name="plus"/></Button>
              <Button color="teal">Tambah Tautan Ke List</Button>
            </Button.Group>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
