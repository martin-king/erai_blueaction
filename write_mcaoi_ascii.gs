function calc

year=1979
yearend=2016

while (year<=yearend)
 say year
 'sdfopen erai_mcao_12hr_ndjfm_'year'.nc'

 rc=math_fmod(year+1,4)
 if (rc=0)
  tmax=304
 else
  tmax=302
 endif
 'set t 1 'tmax
*Greenland-Iceland-Norwegian seas 'mcaoi=aave(mcao,lon=-20,lon=17,lat=66.5,lat=76.5)'
 'mcaoi=aave(mcao,lon=10,lon=30,lat=70,lat=78)'
 tcount=1
 while (tcount<=tmax)
  'set t 'tcount

  'q time'
  timedate=subwrd(result,3)
  time=substr(timedate,1,2)
  day=substr(timedate,4,2)
  monthalp=substr(timedate,6,3)
  yr=substr(timedate,9,4)
  if(monthalp='NOV')
    month='11'
  endif
  if(monthalp='DEC')
    month='12'
  endif
  if(monthalp='JAN')
    month='01'
  endif
  if(monthalp='FEB')
    month='02'
  endif
  if(monthalp='MAR')
    month='03'
  endif

  'd mcaoi'
  line=sublin(result,1)
  val=subwrd(line,4)

  cad=yr''month''day''time'       'val
  rc=write('erai_mcaoi_wbarents_ndjfm_1979_2016.txt',cad,append)

  tcount=tcount+1
 endwhile
 'reinit'
 year=year+1

endwhile

return
