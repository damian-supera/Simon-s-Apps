# Simon's Apps Pages

Publiczny mini-serwis dla wielu aplikacji Simona, przygotowany do publikacji przez GitHub Pages.

Repo zawiera gotowy statyczny hub, do ktorego mozna podpinac wiele aplikacji, m.in. w:

- Google Play
- App Store Connect
- materialach supportowych i legalowych projektu

## Co jest w repo

- `index.html` - wspolny Privacy Center dla wszystkich aplikacji
- `dateup/index.html` - landing legalowy dla aplikacji DateUp
- `dateup/privacy.html` - polityka prywatnosci DateUp
- `dateup/delete-account.html` - strona usuwania konta DateUp
- `micro-workout-timer/index.html` - landing legalowy dla aplikacji Micro Workout Timer
- `micro-workout-timer/privacy.html` - polityka prywatnosci Micro Workout Timer
- `micro-workout-timer/delete-account.html` - strona o usuwaniu danych dla Micro Workout Timer
- `privacy.html` - przekierowanie ze starego rootowego URL do `dateup/privacy.html`
- `delete-account.html` - przekierowanie ze starego rootowego URL do `dateup/delete-account.html`
- `styles.css` - wspolne style dla calego serwisu
- `site.js` - wspolny przelacznik jezyka PL / EN
- `.nojekyll` - wylaczenie przetwarzania Jekyll w GitHub Pages
- `privacy-policy-pl.md` - robocza wersja tresci polityki prywatnosci

## Struktura pod kolejne aplikacje

Kazda aplikacja powinna dostac osobny katalog:

```text
/
  index.html
  styles.css
  site.js
  /dateup
    index.html
    privacy.html
    delete-account.html
  /micro-workout-timer
    index.html
    privacy.html
    delete-account.html
  /app-2
    index.html
    privacy.html
    delete-account.html
```

## Jak to dziala

To jest zwykly statyczny serwis HTML/CSS/JS.

Nie wymaga buildu, frameworka ani instalacji zaleznosci. Po wlaczeniu GitHub Pages repo moze byc publikowane bezposrednio z glownego branchu `main` i z folderu root.

## Uruchomienie lokalne

Najprosciej:

1. Otworz `index.html` w przegladarce.

Albo lokalnie przez prosty serwer, jesli wolisz testowac jak strone webowa:

```powershell
python -m http.server 8000
```

Potem otworz:

`http://localhost:8000`

## Co trzeba uzupelnic przed publikacja

Przed podaniem linkow do sklepow lub uzytkownikow podmien wszystkie placeholdery:

- `[UZUPELNIJ: ...]`
- `[FILL IN: ...]`

Najwazniejsze miejsca do uzupelnienia:

- dane administratora danych
- adres e-mail do spraw prywatnosci
- adres e-mail lub formularz do usuwania konta
- okresy retencji danych
- finalna lista dostawcow / podmiotow przetwarzajacych
- informacje o platnosciach po uruchomieniu Premium

## Publikacja w GitHub Pages

Aktualny uklad repo zaklada publikacje z katalogu glownego repozytorium, czyli z `/(root)`.

Po publikacji adres bedzie mial zwykle format:

`https://NAZWA-UZYTKOWNIKA.github.io/NAZWA_REPOZYTORIUM/`

W przypadku tego repo, jesli pozostanie obecna nazwa, adres bedzie mial format:

`https://damian-supera.github.io/Simon-s-Apps/`

Aktualne adresy DateUp:

- `https://damian-supera.github.io/Simon-s-Apps/dateup/`
- `https://damian-supera.github.io/Simon-s-Apps/dateup/privacy.html`
- `https://damian-supera.github.io/Simon-s-Apps/dateup/delete-account.html`

Aktualne adresy Micro Workout Timer:

- `https://damian-supera.github.io/Simon-s-Apps/micro-workout-timer/`
- `https://damian-supera.github.io/Simon-s-Apps/micro-workout-timer/privacy.html`
- `https://damian-supera.github.io/Simon-s-Apps/micro-workout-timer/delete-account.html`

## Klikniecia w GitHub

Po wypchnieciu repo na GitHub:

1. Wejdz w repozytorium z tym projektem, np. `Simon-s-Apps`.
2. Kliknij `Settings`.
3. W lewym menu kliknij `Pages`.
4. W sekcji `Build and deployment` ustaw `Source` na `Deploy from a branch`.
5. W sekcji `Branch` wybierz:
   - branch: `main`
   - folder: `/(root)`
6. Kliknij `Save`.
7. Poczekaj, az GitHub pokaze publiczny adres strony.

## Po publikacji

Warto od razu sprawdzic:

- czy otwiera sie `index.html`
- czy dziala `dateup/index.html`
- czy dziala `dateup/privacy.html`
- czy dziala `dateup/delete-account.html`
- czy dziala `micro-workout-timer/index.html`
- czy dziala `micro-workout-timer/privacy.html`
- czy dziala `micro-workout-timer/delete-account.html`
- czy przelacznik jezyka PL / EN dziala poprawnie
- czy nie zostaly zadne placeholdery typu `[UZUPELNIJ]` albo `[FILL IN]`

## Uwaga

Jesli kiedys przeniesiesz pliki do folderu `docs`, wtedy w GitHub Pages trzeba bedzie zmienic zrodlo publikacji z `/(root)` na `/docs`.
