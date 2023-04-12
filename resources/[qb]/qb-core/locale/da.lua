local Translations = {
    error = {
        not_online = 'Spiller er ikke online',
        wrong_format = 'Forkert format',
        missing_args = 'Ikke alle argumenter er blevet indtastet (x, y, z)',
        missing_args2 = 'Alle argumenter skal udfyldes!',
        no_access = 'Ingen adgang til denne kommando',
        company_too_poor = 'Din arbejdsgiver har ikke nok penge',
        item_not_exist = 'Varen findes ikke',
        too_heavy = 'For stor lagerbeholdning'
    },
    success = {},
    info = {
        received_paycheck = 'Du har modtaget din lønseddel på $%{value}',
        job_info = 'Arbejde: %{value} | Karakter: %{value2} | Tjeneste: %{value3}',
        gang_info = 'Bande: %{value} | Karakter: %{value2}',
        on_duty = 'Du er nu på arbejde!',
        off_duty = 'Du har nu fri!'
    }
}

Lang = Locale:new({phrases = Translations, warnOnMissing = true})
