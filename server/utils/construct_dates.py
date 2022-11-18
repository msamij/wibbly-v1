import calendar
import datetime


def construct_dates(month: int, year: int):
    num_days = calendar.monthrange(year, month)[1]
    days = [datetime.date(year, month, day)
            for day in range(1, num_days+1)]
    return days
