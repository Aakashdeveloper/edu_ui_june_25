localStorage
> Presistant Storage
> It Save Wrt to browser
> we have to remove it manully

localStorage.setItem('tokenname','12345')
undefined
localStorage.getItem('tokenname')
'12345'
localStorage.removeItem('tokenname')
undefined
localStorage.getItem('tokenname')
null
localStorage.setItem('tokenname','12345')

sessionStorage
> Temp Storage
> save wrt to website
> Remove as soon as we close the tab

sessionStorage.setItem("Testkey","code")
undefined
sessionStorage.getItem("Testkey")
'code'
sessionStorage.removeItem("Testkey")


cookies
> save wrt to URL
> have expires in time
document.cookie
document.cookie="country=India, expires=Mon, 23 Jun 2025 12:00:00 UTC"

