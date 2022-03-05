import { Grid } from '@mui/material';
import UlkoinenLinkki from './UlkoinenLinkki';

export const UlkoisetLinkitWidget = ({ ulkoisetLinkit }: { ulkoisetLinkit: UlkoinenLinkki[] }) => {
  return (
    <Grid container columnSpacing={1} rowSpacing={1} sx={{ marginTop: '4px' }}>
      {ulkoisetLinkit?.map((ulkoinenLinkki, i) => {
        const { Color, Description, LinkText, Title, Url } = ulkoinenLinkki.attributes;
        return (
          <Grid key={i} item xs={12} sm={6} sx={{ height: '100%' }} justifyContent={'stretch'}>
            <UlkoinenLinkki
              color={Color}
              description={Description}
              linkText={LinkText}
              title={Title}
              url={Url}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default UlkoisetLinkitWidget;
