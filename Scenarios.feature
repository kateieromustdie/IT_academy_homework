Feature: ExploreAllStocksScreen
# Steps to open this screen:
# 1. Tap on the "Search" button in the "Portfolio home" screen
# 2. Tap on "See all stocks" button at the bottom of the screen

    Rule: I am a stock/crypto user

    @manual @ExploreAllStocksScreen001
    Scenario: See all active instruments in alphabetical order
      When I open the "Explore" screen
      Then I see the list of all active instruments on Shares
        And the instruments are in alphabetical order
        And each instrument item contains the <logo>, <simple_name>, <symbol> and <intraday_change>
      Examples:
          | <logo>  |   <simple_name>   |   <symbol>  | <intraday_change> |
          | image   |   Dropbox         |   DBX       | +1.00%            |
          | image   |   Netflix         |   NFLX      | -1.88%            |
          | image   |   Beyond Meat     |   BYND      | -0.88%            |
          | image   |   Tesla           |   TSLA      | +0.08%            |

    @manual @exploreAllStocksScreen002
    Scenario: don't see inactive instruments
      When I open the "Explore" screen
      Then I don't see inactive instruments
