
years = range(1979,2017)

for y in years:
  print "cdo mergetime erai_moistmcao_12hr_nov_"+str(y)+".nc erai_moistmcao_12hr_dec_"+str(y)+".nc erai_moistmcao_12hr_jan_"+str(y+1)+ \
        ".nc erai_moistmcao_12hr_feb_"+str(y+1)+".nc erai_moistmcao_12hr_mar_"+str(y+1)+".nc erai_moistmcao_12hr_ndjfm_"+str(y)+".nc"
  print "nccopy -7 -d 6 -s erai_moistmcao_12hr_ndjfm_"+str(y)+".nc erai_moistmcao_12hr_ndjfm_"+str(y)+"_netcdf4classic.nc"
