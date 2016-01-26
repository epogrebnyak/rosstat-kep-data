from kep.file_io.tabulate import pure_tabulate


_TEST_RESULT = '''
| Код       | Описание                      | Ед.изм.                                |
|:----------|:------------------------------|:---------------------------------------|
| I_bln_rub | Инвестиции в основной капитал | млрд. руб.                             |
| I_rog     | Инвестиции в основной капитал | в % к предыдущему периоду              |
| I_yoy     | Инвестиции в основной капитал | в % к аналог. периоду предыдущего года |
'''.strip()

def test_pure_tabulate():
    table = [
        ['I_bln_rub', 'Инвестиции в основной капитал', 'млрд. руб.'],
        ['I_rog', 'Инвестиции в основной капитал', 'в % к предыдущему периоду'],
        ['I_yoy', 'Инвестиции в основной капитал', 'в % к аналог. периоду предыдущего года']
    ]
    assert pure_tabulate(table, ["Код", "Описание", "Ед.изм."]) == _TEST_RESULT