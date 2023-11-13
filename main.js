        $(document).ready(function() {
            $('#taskForm').submit(function(e) {
                e.preventDefault();

                var taskName = $('#taskName').val();

                $('#taskList').append('<li>' + taskName + '</li>');

                $('#taskName').val('');
            });

            $('#taskList').on('click', 'li', function() {
                $(this).toggleClass('completed');
            });
        });
