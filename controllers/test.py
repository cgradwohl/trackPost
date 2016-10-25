# These are functions for testing only.


def test_add():
    form = SQLFORM.factory(
        Field('artist'),
        Field('album'),
        Field('track'),
        Field('duration', 'float'),
    )
    return dict(form=form)
