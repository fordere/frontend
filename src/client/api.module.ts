import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssignrolesService } from './api/assignroles.service';
import { AuthService } from './api/auth.service';
import { BarService } from './api/bar.service';
import { BarsService } from './api/bars.service';
import { CalendarService } from './api/calendar.service';
import { CompetitionService } from './api/competition.service';
import { CompetitionsService } from './api/competitions.service';
import { ContactService } from './api/contact.service';
import { CupsService } from './api/cups.service';
import { DivisionsService } from './api/divisions.service';
import { FinaldayService } from './api/finalday.service';
import { ForumService } from './api/forum.service';
import { LeaguesService } from './api/leagues.service';
import { MailinglistService } from './api/mailinglist.service';
import { MatchesService } from './api/matches.service';
import { NewsService } from './api/news.service';
import { PaymentsService } from './api/payments.service';
import { RecoveryService } from './api/recovery.service';
import { RegisterService } from './api/register.service';
import { SeasonService } from './api/season.service';
import { SeasonsService } from './api/seasons.service';
import { SmsService } from './api/sms.service';
import { StatisticsService } from './api/statistics.service';
import { TablesService } from './api/tables.service';
import { TeaminscriptionsService } from './api/teaminscriptions.service';
import { TeamsService } from './api/teams.service';
import { TournamentregistrationService } from './api/tournamentregistration.service';
import { UnassignrolesService } from './api/unassignroles.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AssignrolesService,
    AuthService,
    BarService,
    BarsService,
    CalendarService,
    CompetitionService,
    CompetitionsService,
    ContactService,
    CupsService,
    DivisionsService,
    FinaldayService,
    ForumService,
    LeaguesService,
    MailinglistService,
    MatchesService,
    NewsService,
    PaymentsService,
    RecoveryService,
    RegisterService,
    SeasonService,
    SeasonsService,
    SmsService,
    StatisticsService,
    TablesService,
    TeaminscriptionsService,
    TeamsService,
    TournamentregistrationService,
    UnassignrolesService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
