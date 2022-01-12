import { useUlkoisetLinkit } from 'hooks/useUlkoisetLinkit';
import { Grid } from '@mui/material';
import UlkoinenLinkkiWidget from './UlkoinenLinkkiWidget';

export const WidgetContainer = ({ locale }: { locale: Lang }) => {
  const { data } = useUlkoisetLinkit();
  const ulkoisetLinkit = data?.data?.data || [];

  return (
    <Grid container columnSpacing={1} rowSpacing={1} sx={{ marginTop: '4px' }}>
      {ulkoisetLinkit?.map((n, i) => (
        <Grid key={i} item xs={12} sm={6} sx={{ height: '100%' }} justifyContent={'stretch'}>
          <UlkoinenLinkkiWidget key={i} ulkoinenLinkki={n} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WidgetContainer;
